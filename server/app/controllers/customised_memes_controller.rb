class CustomisedMemesController < ApplicationController
  def index
    customisedMemes = CustomisedMeme.all
    render json: customisedMemes
  end

  def new
    customisedMeme = CustomisedMeme.new
  end

  def show
    customisedMeme = CustomisedMeme.find_by(id: params[:id])
    if  customisedMeme
      render json:  customisedMeme
    else
      render json: {error: "This meme does not exist?"}, status: 404
    end
  end

  def create
    customisedMeme = CustomisedMeme.create(customisedMeme_params)
    if customisedMeme
      render json: customisedMeme
    else
      render json: {error: "Meme could not be created"}, status: 400
    end
  end

  def destroy
    customisedMeme = Activity.find_by(customisedMeme_params)
    if customisedMeme
      customisedMeme.destroy
      render json: {message: "Meme destroyed"}
    else
      render json: {error: "Could not destroy"}, status: 404
    end
  end

  private 
  
  def customisedMeme_params 
    params.require(:customised_meme).permit(:name, :url, :user_id)

  end
end
