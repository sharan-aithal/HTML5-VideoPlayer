var PLAYER=PLAYER||{};
PLAYER.Playlist=function(b,d,e,f,g,c,h,k,l,m){var a=this;this.VIDEO=e;this.element=f;this.canPlay=h;this.CLICK_EV=k;this.preloader=g;this.videoid="VIDEOID";this.adStartTime="ADSTARTTIME";this.videoAdPlaying=!1;this.playlist=$("<div />");this.playlist.attr("id","playlist");this.playlistContent=$("<dl />");this.playlistContent.attr("id","playlistContent");a.videos_array=[];a.item_array=[];$(d).each(function(){a.videos_array.push({id:this.id,title:this.title,video_path_mp4:this.mp4,info_text:this.info,
adPath:this.popupAdvertisementPath,adGotoLink:this.popupAdvertisementGotoLink,adStartTime:this.popupAdvertisementStartTime,adEndTime:this.popupAdvertisementEndTime,adShow:this.popupAdvertisementShow,videoAdShow:this.videoAdvertisementShow,videoAd_path_mp4:this.videoAdvertisement_mp4,videoAdGotoLink:this.videoAdvertisementGotoLink});a.item=$("<div />");a.item.addClass("item");a.playlistContent.append(a.item);a.item_array.push(a.item);c.canPlayType&&c.canPlayType("video/mp4").replace(/no/,"")&&(this.canPlay=
!0,a.videos_array[0].videoAdShow?(a.videoAdPlaying=!0,video_path=a.videos_array[0].videoAd_path_mp4):a.videos_array[0].videoAdShow||(video_path=a.videos_array[0].video_path_mp4));a.VIDEO.load(video_path)});a.totalWidth=b.videoPlayerWidth;a.totalHeight=b.vieoPlayerHeight;a.playerWidth=a.totalWidth-a.playlist.width();a.playerHeight=a.totalHeight-a.playlist.height();a.playlist.css({left:a.playerWidth,height:a.playerHeight});this.playlistW=this.playlist.width();this.playlistH=this.playlist.height()};
PLAYER.Playlist.prototype={hidePlaylist:function(){this.playlist.hide()},showPlaylist:function(){this.playlist.show()}};