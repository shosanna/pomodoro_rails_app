class TasksController < ApplicationController
  def index
    render json: Task.all
  end

  def create
    render json: Task.create!(task_params)
  end

  def update
    task = Task.find(params[:id])
    render json: task.update_attributes!(task_params)
  end

  def destroy
    Task.find(params[:id]).destroy
    render nothing: true
  end

  private

  def task_params
    params[:task].permit(:content)
  end
end
