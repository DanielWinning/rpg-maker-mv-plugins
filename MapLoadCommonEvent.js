/*:
 * @plugindesc Calls a common event every time a map is loaded.
 * @author DannyXCII
 *
 * @param commonEventId
 * @desc The ID of the event you wish to call on map load.
 * @default 0
 *
 * @help Provide the ID of the common event you'd like to run on map load.
 */

(() => {
   const parameters = PluginManager.parameters('MapLoadCommonEvent'),
       oldGamePlayer_performTransfer = Game_Player.prototype.performTransfer;

   Game_Player.prototype.performTransfer = function() {
      if (this.isTransferring()) {
         if (parameters.commonEventId !== undefined && parameters.commonEventId > 0) {
            $gameTemp.reserveCommonEvent(parameters.commonEventId);
         }
      }

      oldGamePlayer_performTransfer.call(this);
   }
})();