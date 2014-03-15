class TasksController < ApplicationController


  def index
    @task = Task.new
    @tasks = current_user.tasks || Task.all
  end



  def create
    task = Task.new
    task.content = params[:task][:content]

    if current_user
      task.user_id = current_user.id
    end

    task.save
    redirect_to :back
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
