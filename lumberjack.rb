require 'guillotine' #URL shortening
require 'redis'      #For redistogo on Heroku
require 'haml'       #view templates


module Lumberjack
  class App < Guillotine::App
  	uri     = URI.parse(ENV["REDISTOGO_URL"])
    redis   = Redis.new(:host => uri.host, :port => uri.port, :password => uri.password)
    adapter = Guillotine::Adapters::RedisAdapter.new redis
    set :service => Guillotine::Service.new adapter

    get '/' do
      redirect 'https://homepage.com'
    end
  end
end