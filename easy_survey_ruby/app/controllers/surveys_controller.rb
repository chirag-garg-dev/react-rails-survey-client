class SurveysController < ApplicationController
  def create
    survey = Survey.new(survey_params)
    if survey.save
      render json: survey, status: :created
    else
      render json: survey.errors, status: :unprocessable_entity
    end
  end

  def update
    survey = Survey.find(params[:id])
    if survey.update(survey_params)
      render json: survey, status: :ok
    else
      render json: survey.errors, status: :unprocessable_entity
    end
  end

  def show
    survey = Survey.find(params[:id])
    render json: survey, include: :components
  end

  private

  def survey_params
    params.require(:survey).permit(:name, :description)
  end
end
