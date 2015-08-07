/*
 * Function log, expecting a log type (ERROR, INFO, or DEBUG) and some text that the user wants to output to the console. 
 */
function log( text, type ) {
	/* Global output level
	 * 0 = only show errors
	 * 1 = show errors and info
	 * 2 = show everything including DEBUG
	 */
	var level = 2;
	
	//if the type is not correct or is missing, set it to INFO.
	if ( type != "ERROR" && type !== "INFO" && type !== "DEBUG" ) { type = "INFO"; }
	
		//initialize the output variables
	var output = "";
	
	//choose what happens when based on the log level
	switch ( level ) {
		case 0:		if ( type == "ERROR" ) { output = text; }						break; 
		case 1:		if ( type == "ERROR" || type == "INFO" ) { output = text; }		break;
		case 2:		output = text;													break;
		default:	output = text;													break;
	}

	//spit the string out to the console if it contains someting
	if ( output ) { console.log( level + " | " + type + " | " + output ); }
}
