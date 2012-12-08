# config.ru
require "rubygems"
require File.expand_path("./lumberjack.rb", __FILE__)
run Lumberjack::App