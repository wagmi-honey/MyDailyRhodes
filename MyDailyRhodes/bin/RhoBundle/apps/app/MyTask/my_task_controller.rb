require 'rho/rhocontroller'
require 'helpers/browser_helper'

class MyTaskController < Rho::RhoController
  include BrowserHelper

  #GET /MyTask
  def index
    @mytasks = MyTask.find(:all)
    render :back => '/app'
  end

  # GET /MyTask/{1}
  def show
    @mytask = MyTask.find(@params['id'])
    if @mytask
      render :action => :show, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # GET /MyTask/new
  def new
    @mytask = MyTask.new
    render :action => :new, :back => url_for(:action => :index)
  end

  # GET /MyTask/{1}/edit
  def edit
    @mytask = MyTask.find(@params['id'])
    if @mytask
      render :action => :edit, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # POST /MyTask/create
  def create
    @mytask = MyTask.create(@params['mytask'])
    redirect :action => :index
  end

  # POST /MyTask/{1}/update
  def update
    @mytask = MyTask.find(@params['id'])
    @mytask.update_attributes(@params['mytask']) if @mytask
    redirect :action => :index
  end

  # POST /MyTask/{1}/delete
  def delete
    @mytask = MyTask.find(@params['id'])
    @mytask.destroy if @mytask
    redirect :action => :index  end
end
