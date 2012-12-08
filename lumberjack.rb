require 'guillotine' #URL shortening
require 'redis'      #For redistogo on Heroku

# Haml::Options.defaults[:format] = :html5

module Lumberjack
  class App < Guillotine::App
    uri     = URI.parse(ENV["REDISTOGO_URL"])
    redis   = Redis.new(:host => uri.host, :port => uri.port, :password => uri.password)
    adapter = Guillotine::Adapters::RedisAdapter.new(redis)
    set :service => Guillotine::Service.new(adapter)

    get '/' do
    	haml :index
    end

  end
end