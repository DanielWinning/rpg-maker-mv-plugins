/*:
 * @plugindesc A test plugin.
 * @author DannyXCII
 *
 * @param commonEventId
 * @desc The ID of the event you wish to call on map load.
 * @default 0
 *
 * @help This plugin does not provide any help commands.
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