class TasksController < AuthenticatedController
  def index
    @task = Task.new
    if current_user
      @tasks = current_user.tasks
    else
      @tasks = Task.all
    end
  end

  def create
    task = current_user.tasks.build(params.require(:task).permit(:content))
    task.save!
    @tasks = Task.all
  end

  def destroy
    task = current_user.tasks.find(params[:id])
    task.destroy
    @tasks = Task.all
  end

  def update
    task = current_user.tasks.find(params[:id])
    task.update_attributes!(done: (params[:done] == "true"))
    @tasks = Task.all
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
