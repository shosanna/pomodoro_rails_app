class Task < ActiveRecord::Base

  belongs_to :user

  validates_presence_of :content
  validates_inclusion_of :done, in: [true, false]
end
