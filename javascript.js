window.onload = function()
{
    DisplayTime();
    DisplayReminder();
}

function DisplayReminder()
{
    var reminder1 = new Array( "breakfast" , 6 , 00 );
    var reminder2 = new Array( "lunch" , 12 , 00 );
    var reminder3 = new Array( "dinner" , 23 , 59 );
    var reminderList = new Array( reminder1 , reminder2 , reminder3 );
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();

    for ( i = 0 ; i < reminderList.length ; i++ )
    {
        var hourText = "";
        var minuteText = "";
        var reminder = reminderList[ i ];
        var reminderDate = new Date();
        reminderDate.setHours( reminder[ 1 ] , reminder[ 2 ] );

        if ( reminderDate > currentTime )
        {

            if ( reminder[ 2 ] < currentMinutes )
            {
                var hours = ( reminder[ 1 ] - currentHours ) - 1;
                var minutes = ( reminder[ 2 ] + 60 ) - currentTime.getMinutes();
            }
            else
            {
                var hours = reminder[ 1 ] - currentHours;
                var minutes = reminder[ 2 ] - currentTime.getMinutes();
            }

            if ( hours == 0 )
            {
                hourText = "";
            }
            else if ( hours == 1 )
            {
                hourText = hours + " hour ";
            }
            else
            {
                hourText = hours + " hours ";
            }

            if ( minutes == 0 )
            {
                minuteText = "";
            }
            else if ( minutes == 1 )
            {
                minuteText = minutes + " minute ";
            }
            else
            {
                minuteText = minutes + " minutes ";
            }

            if ( hours != 0 && minutes != 0 )
            {
                hourText += " & "
            }

            document.getElementById( "reminder" ).innerHTML = hourText + minuteText + "until " + reminder[ 0 ] + ".";
            setTimeout( DisplayReminder , 500 );
            break;
        }
        else if ( currentHours == reminder[ 1 ] && currentMinutes == reminder[ 2 ] )
        {
            document.getElementById( "reminder" ).innerHTML = "Time for " + reminder[ 0 ] + ".";
            setTimeout( DisplayReminder , 600000 );
            break;
        }
    }
}


function DisplayTime()
{
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var meridiem = " PM";
	var day = today.getDay();
	var month = today.getMonth();
	var date = today.getDate();
	
	switch ( day )
	{
		case 0:
		day = "Sunday"
		break;

		case 1:
		day = "Monday"
		break;

		case 2:
		day = "Tuesday"
		break;

		case 3:
		day = "Wednesday"
		break;

		case 4:
		day = "Thursday"
		break;

		case 5:
		day = "Friday"
		break;

		case 6:
		day = "Monday"
		break;
	}
	
	switch ( month )
	{
		case 0:
		month = "January"
		break;

		case 1:
		month = "February"
		break;

		case 2:
		month = "March"
		break;

		case 3:
		month = "April"
		break;

		case 4:
		month = "May"
		break;

		case 5:
		month = "June"
		break;

		case 6:
		month = "July"
		break;

		case 7:
		month = "August"
		break;

		case 8:
		month = "September"
		break;

		case 9:
		month = "October"
		break;

		case 10:
		month = "November"
		break;

		case 11:
		month = "December"
		break;
	}
	
	if ( hours < 12 )
	{
		meridiem = " AM";
		if ( hours == 0 )
		{
			hours = 12;
		}
	}
	
	else if ( hours > 12 )
	{
		hours -= 12;
	}
	
	minutes = AddZero( minutes );
	seconds = AddZero( seconds );
	document.getElementById( "time" ).innerHTML = hours + ":" + minutes + ":" + seconds + meridiem;
	document.getElementById( "date" ).innerHTML = day + ", " + month + " " + date;
	setTimeout( DisplayTime , 500 );
}

function AddZero( number )
{
	if ( number < 10 )
	{
		number = "0" + number;
	}
	return number;
}
