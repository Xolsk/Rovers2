# Rovers2
Version 2 of Rover kata

INSTALL NOTES
Download these files into a folder /n
run "npm install" to install WebPack and Jasmine /n
open index.html on the "dist" folder /n

USER NOTES
If no valid map is provided, it will default to a 50x50 one /n
If no valid deployment coordinates are provided, it will default to 0x0.
Rovers will stop if they reach another Rover or the limit of the map.
When reading through the orders it will ignore unmatched orders and just focus on recognisable ones. This does not have much sense now, but would make things easier in the future if we decide to add extra orders.

DESIGN DECISIONS
I created an abstract "vehicle" class for future scalability. For now we have Rovers, but in the future we may want other kind of vehicles with different properties and sorts of orders
With the same philosophy, orders are all in the same class. This way in the future we can add new orders like moving backwards, or sidestepping, to implement in different sorts of vehicles, in an easy way.
in a similar veing, obstacles are stored in the Map object so that in the future the map can begin already with some obstacles, not just the previous vehicles that moved around the map.
helpers are ac couple module that focus on fetching the data from the input as well as making sense of it for the program (filtering, arranging, etc)also we store there a module to display the info on the broweser.


PROBLEMS FOUND
When adapting the Rover to this new version, what actualy took me more time was adding and formatting the txt file into the program
-To begin with, I found synchronicity problems that on the previous version did not exist
-In a similar vein (in the sense that on the first version of the program this did not happen) now the information was being loaded with extra not seen chars on the strings that generated really unexpected behaviours.

TO DO
Implement Tests!!!
