class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGULAR_EXPRESSION }
    validates :password, presence: true, length: { min: 6 }, if: -> { new_record? || password.present? }
end
