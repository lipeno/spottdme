class UserutilController < ApplicationController
	respond_to :html, :xml, :js, :json
	before_filter :authenticate_user!
	skip_before_filter :verify_authenticity_token

	def fetch_current_user
		#current_user.slice(:id,:role)
		render :json => current_user
	end

	def index
	User.find(params[:id])
	end
end