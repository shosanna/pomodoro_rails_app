class TasksController < ApplicationController


  def index
    @task = Task.new
    if current_user
      @tasks = current_user.tasks
    else
      @tasks = Task.all
    end
  end


  def create
    @task = current_user.tasks.build(params.require(:task).permit(:content))
    @task.save!
  end

  def destroy

  end

  def show

  end


  def start
    @task = Task.new
    if current_user
      @tasks = current_user.tasks
    else
      @tasks = Task.all
    end

  end

end
