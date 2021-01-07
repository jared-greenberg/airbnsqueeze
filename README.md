![logo](../readMedia/full_logo.png?raw=true)

Airbnsqueeze is a clone of Airbnb with a twist. It is an online vacation rental site that allows you to browse, book, and review stays exclusively in tiny homes. Tiny homes are recently quite popular for being "off the grid", enviromentally conscious, and comparatively inexpensive. Rather than hastily taking the full leap into downsizing, why not take the opportunity to try it out on vacation and see what it's all about.

![splash](../readMedia/splash.png?raw=true)
![search](../readMedia/search.png?raw=true)


### You can visit Airbnsqueeze [here](https://airbnsqueeze.herokuapp.com/#/)!  
<br/>

# Technologies

The backend of the app is implemented using the Ruby on Rails framework with a PostGreSQL database, while the frontend is managed using the React and Redux libraries of Javascript. Airbnsqueeze also uses the Google Maps API to show the locations of the specific listings that are available in the database. Styling is done via SCSS and the apps images are stored both in Rails assets as well as AWS hosting services. There is also a date-range selector for searches and bookings that is implemented using the "react-dates" library.  
<br/> 

# Key Features

## User Authentication

![auth](../readMedia/auth.png?raw=true)

Signing up and logging in are available through a drop down menu that is always present the top of the application. Both forms are implemented using a modal component. Validations for user credentials are monitored in the Rails backend, which delivers specific error messages that can be displayed to assist the user during the process. Once logged in, the current user is then given access to make and monitor bookings and to add reviews for their previous stays. A demo login is available to quickly access these features. 

---  
<br/>

## Making a Booking

![booking](../readMedia/booking.png?raw=true)

The page for each specific listing provides all the information needed to make a decision about which tiny house you would like to rent. After seeing the photos, the reviews and ratings, as well as the location on a map, there is a booking menu available where you can try to make a rental request. The user must choose a start and end date on the "react-dates" range calendar and has the option of choosing the number of guests up to the capacity allowed for the specific listing. Error messages will be displayed should the user leave out either date as well as in the event that the booking overlaps with another. A successful booking will bring you to the trips page where it can be cancelled up to its start date.

---  
<br/>

## Adding/Editing Reviews

![review](../readMedia/review.png?raw=true)

On the Trips page, under the "Past" trips section, the user can add, edit, or remove reviews for their past bookings. The review form also makes use of a modal component where you can give a rating between 1 and 5 stars and leave a text description. After adding or editing a review, the user is directed to the published version of their review on the listing page. Next to their review, a link that is only visible to the current user is available to direct them back to make further changes. A user can only access their own Trips page and must be signed in to do so.

 
<br/>

# Challenges

## Sorting Reservations
Ultimately I aimed to stay true the integrity of the original site by only letting users cancel upcoming trips (versus past trips). So I filtered through the bookings using the selector below to sort them into these categories. Intending on grabbing the current date using `new Date()` I noticed some discrepancies between the behavior of Node.js and Chrome V8 upon this initialization. To keep my results consistent and always accurate I took advantage of the `moment` library I had used along with my DateRange Picker to bear the responsibility of pulling the current date for comparison.

```javascript
// .../util/selectors.js

export const userUpcomingBookings = (bookings, userId) => {
   return bookings.filter(booking => (
          (booking.renterId === parseInt(userId)) && (new Date(booking.startDate) > new Date(moment()))
      )
   )
}
```

## User Friendly Cancellation
While allowing these upcoming reservations to be cancelled, I knew I wanted to avoid single click cancellation without a prompt; it does not bode well for people on their clumsiest days. With my goal of avoiding an external library to create a pop up, I came up with the solution to refactor my modal wrapper to render more types of components including one for a cancellation prompt. This shortened my code and kept it more DRY. Using more specific click handlers and interpolation on the css class attributes allowed me to customize the behaviors and appearance of each type of modal.

```javascript  
  // .../components/modal/modal.jsx

  handleClick() {
    if (this.props.modalType !== "cancelBooking"){
      this.props.closeModal();
    }
    return
  }

  render(){

      const {modalType, closeModal} = this.props;

      return (
        <div id={`${this.componentType()}-modal-background`} onClick={this.handleClick}>
        
          <div id={`${this.componentType()}-modal-contents`}
            onClick={(e) => e.stopPropagation()}>
            
            {this.modalComponent()}
            
            <a id="modal-x" onClick={closeModal}>{'\u00D7'}</a>
            
          </div>
        </div>
      )
    }
  ``` 

## Map Boundaries as a Filter
Choosing to focus on locations in only three cities made filtering by a location name as simple as string comparison (with some permutations to allow for more flexible input). But I also only wanted to display the listing information for listings within the map bounds. To achieve this effect I grabbed the southwest and northeast coordinates of the map using the `getBounds()` method of Google Maps on a map "idle" event. I then filtered further through listings on the backend using the Active Record query below.

```ruby
# .../models/listing.rb

def self.filter_by_region(region)
    min_lat, max_lat = region["southwest"]["lat"].to_f, region["northeast"]["lat"].to_f
    min_lng, max_lng = region["southwest"]["lng"].to_f, region["northeast"]["lng"].to_f
    self.where(latitude: min_lat..max_lat).where(longitude: min_lng..max_lng)
  end
```

## Marker Clusters for Cities
After some obstacles using the Marker Clusterer that comes with the Google Maps API, I decided to make my own. I decided that if the zoom on the map was greater than 11 (too far out to see individual markers) that the map would draw a custom icon for each city with a logo and name label. If cities are drawn, the `drawCities()` method returns true and the map holds off on creating the individual listing markers for that city. Only when the zoom threshold is crossed, will the map begin rendering markers for the individual listings. My custom marker clusters are clickable and will update the page as a search for listings within the corresponding city. 


```javascript
  // .../components/map/map_display.jsx

  componentDidUpdate(prevProps){
      if (isEqual(prevProps.query, this.props.query) && isEqual(prevProps.listings, this.props.listings)) return;
      
      ...

      if (!this.drawCities()) {
          this.markerManager.updateMarkers(this.props.listings, this.markerClickHandler.bind(this), this.props.type)
        }
   }
 drawCities(){
    if (this.props.type === "index" && this.map.getZoom() < 11 && this.props.query.location === ""){
      this.markerManager.updateMarkers(Object.values(cities), this.cityClickHandler.bind(this), "city");
      return true
    }
    return false
  }
```

</br>

## Future Features
- To use geocoding to allow for more flexible input for "location" in the search bar.
- To gray out unavailable dates on the booking form calendar.


