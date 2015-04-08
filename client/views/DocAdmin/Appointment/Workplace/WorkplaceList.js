Template.WorkplaceList.helpers({
  name: function() {
    //var a = document.createElement('a');
    //a.href = this.name;
    //return a;
    return this.name;
  },
  counter_calendar_modal : function() {
	return Math.random().toString(36).substring(7);
  }
});
Template.WorkplaceList.events({
  'click .btn.btn-primary.btn-sm': function(e) {
    e.preventDefault();
    Session.set("clinic_id", (this._id).toString() );
    Session.set("patient_id", "" );
    //console.log((this._id).toString());
  }
});

Template.WorkplaceList.rendered = function () {
    
    $("span.pie").peity("pie", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    })
    $(".bar-colours-1").peity("bar", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
	})

	Morris.Area({
        element: 'workplace_morris_area_chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        lineColors: ['#87d6c6', '#54cdb4','#1ab394'],
        lineWidth:2,
        pointSize:1,
    });



};
