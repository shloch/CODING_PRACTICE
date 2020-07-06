# frozen_string_literal: true

=begin
Your task in order to complete this Kata is to write a
function which formats a duration, given as a number
of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it
is zero, it just returns "now". Otherwise, the duration is
expressed as a combination of years, days, hours,
minutes and seconds.

It is much easier to understand with an example:

format_duration(62)    # returns "1 minute and 2 seconds"
format_duration(3662)  # returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4
seconds, 1 year, etc. In general, a positive integer
and one of the valid units of time, separated by a space.
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", ").
Except the last component, which is separated by " and ", just
like it would be written in English.

A more significant units of time will occur before than a least
significant one. Therefore, 1 second and 1 year is not correct,
but 1 year and 1 second is.

Different components have different unit of times. So there is
 not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be
zero. Hence, 1 minute and 0 seconds is not valid, but it should
be just 1 minute.

A unit of time must be used "as much as possible". It means that the
 function should not return 61 seconds, but 1 minute and 1 second instead.
 Formally, the duration specified by of a component must not be greater
 than any valid more significant unit of time.
=end

def format_duration(seconds)
  # creating array of length 5 representing respectively
  # year - day - hours - min - sec (all integers)

  time_arr = []
  remainder = seconds
  while remainder.positive?
    if remainder >= 31_536_000
      time_arr[0] = remainder / 31_536_000
      remainder %=  31_536_000
    elsif remainder >= 86_400
      time_arr[1] = remainder / 86_400
      remainder %=  86_400
    elsif remainder >= 3_600
      time_arr[2] = remainder / 3_600
      remainder %=  3_600
    elsif remainder >= 60
      time_arr[3] = remainder / 60
      remainder %=  60
    else
      time_arr[4] = remainder
      remainder = 0
    end
  end

  answer_arr = format_dispay(time_arr)
  return answer_arr[0] if answer_arr.size == 1
  return 'now' if answer_arr.empty?

  ans = ''
  (0...answer_arr.size - 1).each do |i|
    ans += answer_arr[i] + ', '
  end
  final = ans[0..ans.size - 3]
  final += " and #{answer_arr.last}"
  final
end

def format_dispay(arr)
  display_arr = []
  unless arr[0].nil?
    display_arr << if arr[0] == 1
                     "#{arr[0]} year"
                   else
                     "#{arr[0]} years"
                   end

  end
  unless arr[1].nil?
    display_arr << if arr[1] == 1
                     "#{arr[1]} day"
                   else
                     "#{arr[1]} days"
                   end
  end
  unless arr[2].nil?
    display_arr << if arr[2] == 1
                     "#{arr[2]} hour"
                   else
                     "#{arr[2]} hours"
                   end
  end
  unless arr[3].nil?
    display_arr << if arr[3] == 1
                     "#{arr[3]} minute"
                   else
                     "#{arr[3]} minutes"
                   end
  end
  unless arr[4].nil?
    display_arr << if arr[4] == 1
                     "#{arr[4]} second"
                   else
                     "#{arr[4]} seconds"
                   end
  end
  display_arr
end
