/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4
    }
    ) {
      (knowsProgramming) ? all = 800 : all = 1300;
  
      weeks = Math.ceil(all/config[focus]);

      return weeks;
  };
