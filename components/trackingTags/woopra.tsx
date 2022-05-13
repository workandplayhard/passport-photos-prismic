/* eslint-disable max-len */
import React from 'react'

const WoopraScript: React.FC = () => (
  <>
    <script
      id="woopra-tracking"
      dangerouslySetInnerHTML={{
        __html: `!function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
        window.woopra.config({
          domain: "passportphotos.com",
          outgoing_tracking: true,
          download_tracking: true,
          click_tracking: true
        });
        
        window.woopra.track();
        `,
      }}
    />
  </>
)

export default WoopraScript
