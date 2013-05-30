class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.boolean :activated

      t.timestamps
    end
  end
end
