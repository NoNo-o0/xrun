/* 0.5.1 2020-12-04 18:40:10 */
var app=new function(){this.name="Evadare",this.version="1",this.date="2022",this.folder="asset-v6/",this.looptime=6857,this.bpm=140,this.totalframe=342,this.nbpolo=7,this.nbloopbonus=6,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=27,this.recminloop=3,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#070314",this.col0="#68388e",this.col1="#542a82",this.col2="#401e72",this.col3="#231144",this.col4="#210534",this.animearray=[{name:"1_lanturi",color:"68388e",uniqsnd:!1},{name:"2_jacko",color:"68388e",uniqsnd:!1}, {name:"3_breakmask",color:"68388e",uniqsnd:!0}, {name:"4_tim",color:"68388e",uniqsnd:!0}, {name:"5_kah",color:"68388e",uniqsnd:!0},{name:"6_bass",color:"b43939",uniqsnd:!1},{name:"7_gasmask",color:"b43939",uniqsnd:!1},{name:"8_clock",color:"b43939",uniqsnd:!0},{name:"9_piano",color:"b43939",uniqsnd:!1},{name:"10_teeth",color:"b43939",uniqsnd:!0},{name:"11_skel",color:"2d846c",uniqsnd:!0},{name:"12_mumie",color:"2d846c",uniqsnd:!0},{name:"13_agatha",color:"2d846c",uniqsnd:!1},{name:"14_infectat",color:"2d846c",uniqsnd:!0},{name:"15_dou",color:"2d846c",uniqsnd:!1},{name:"16_shakala",color:"195a71",uniqsnd:!0},{name:"17_evadare",color:"195a71",uniqsnd:!1},{name:"18_stars",color:"195a71",uniqsnd:!1},{name:"19_samara",color:"195a71",uniqsnd:!1},{name:"20_aries",color:"195a71",uniqsnd:!1}],this.bonusarray=[{name:"Invitat",src:"b1-c2-invitat-hb.mp4",code:"1,3,4,11,12",sound:"bonus-invitat",aspire:"aspire-invitat"},{name:"evadare",src:"b2-c2-evadare-hb.mp4",code:"1,6,7,14,17",sound:"bonus-evadare",aspire:"aspire-invitat"},{name:"galaxy",src:"b3-c2-galaxy-hb.mp4",code:"8,9,15,19,20",sound:"bonus-galaxy",aspire:"aspire-galaxy"}],this.unlockerarray=[];for(var n=0,a=this.animearray.length;n<a;n++){var i=this.animearray[n].name;this.animearray[n].soundA=i+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?i+"_a":i+"_b",this.animearray[n].anime=i+"-sprite.png",this.animearray[n].animeData=i+".json"}};