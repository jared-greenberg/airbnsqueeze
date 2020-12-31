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

---  
<br/>

## Favorite Coding Anecdote
Ultimately I aimed to stay true the integrity of the original site by only letting users cancel upcoming trips and to not allow a single click cancellation option; it does not bode well for people on their clumsiest days. So, I decided to make a popup to confirm cancellation that you can't easily click out of, which was not the easiest for me to conceive with my goal of workign mostly in native React. To make a pop up window for cancelling, I came up with the solution to refactor my modal to render more types of components. Using more specific click handlers and interpolation on the css class attributes allowed me to customize the behaviors and appearance of each type of modal.
```javascript  

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
  <br/>



## ToDos
- To use geocoding to allow for more flexible input for "location" in the search bar.
- To include the map bounds as a further search filter for tiny houses
- To display only available dates on the booking form


