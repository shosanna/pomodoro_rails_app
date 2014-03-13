require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get start" do
    get :start
    assert_response :success
  end

  test "should get tasks" do
    get :tasks
    assert_response :success
  end

end
