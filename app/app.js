var experience = [ 59753, 226288, 85738.14, 128841.30 ];
            
  d3.select('svg').selectAll('rect').data(experience).attr('height', function(d) {
      return d;
  })