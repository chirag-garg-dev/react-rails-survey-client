class Survey < ApplicationRecord
	has_many :components, dependent: :destroy
end

