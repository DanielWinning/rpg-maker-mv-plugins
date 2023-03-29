/*:
 * @plugindesc Allows you to set a custom width for your title menu.
 * @author DannyXCII
 * @help This plugin provides no help commands.
 *
 * @param windowWidth
 * @desc The width of the title menu in pixels.
 * @default 240
 */

(() => {
    const parameters = PluginManager.parameters('CustomTitleMenuWidth');

    Window_TitleCommand.prototype.windowWidth = function() {
        return parameters.windowWidth;
    }
})();