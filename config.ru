# config.ru
require "rubygems"
require File.expand_path("../lumberjack.rb", __FILE__)
# this let's us serve static files from public/css
# and public/images
use Rack::Static, :urls => ["/css", "/images"], :root => "public"
run Lumberjack::App