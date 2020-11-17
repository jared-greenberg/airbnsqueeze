require 'date'

class User < ApplicationRecord 
  
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 8}, allow_nil: true
  validates :first_name, :last_name, :password_digest, :birthday, presence: true
  validate :valid_birthday, if: :birthday

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password) 
    user = self.find_by(email: email);
    return nil unless user && user.is_password?(password)
    user
  end

  def valid_birthday    
    today = Date.today
    unless self.birthday <= Date.new(today.year - 18, today.month, today.day)
      errors.add(:birthday, "invalid")
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypt_obj = BCrypt::Password.new(self.password_digest)
    bcrypt_obj.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  


end