class Api::QuizzesController < ApplicationController

  def new
    quiz = { message: 'hello' }
    render json: quiz
  end

end
