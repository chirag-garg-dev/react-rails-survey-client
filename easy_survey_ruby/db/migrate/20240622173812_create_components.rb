class CreateComponents < ActiveRecord::Migration[7.1]
  def change
    create_table :components do |t|
      t.references :survey, null: false, foreign_key: true
      t.string :component_type
      t.integer :x
      t.integer :y
      t.string :text

      t.timestamps
    end
  end
end
