/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

for(i=0; i <=100; i++) {
    console.log(i);
}

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var hashTag= '';

for(i = 0; i < 7; i++) {
    for(j = 0; j <= i; j++) {
       hashTag+= '#';
    }
    console.log(hashTag);
    var hashTag = '';
}