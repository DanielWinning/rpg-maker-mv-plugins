/*:
 * @plugindesc Adds weather to your side view battles.
 * @author DannyXCII
 * @help Persists weather between the field and battles.
 */

(() => {
    const parameters = PluginManager.parameters('BattleWeather'),
        oldSpritesetBattle_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer;

    Spriteset_Battle.prototype.createLowerLayer = function() {
        oldSpritesetBattle_createLowerLayer.call(this);
        this.createWeather();
    }

    Spriteset_Battle.prototype.createWeather = function() {
        this._weather = new Weather();
        this._weather.type = $gameScreen.weatherType();
        this._weather.power = $gameScreen.weatherPower();
        this._weather.origin.x = 0;
        this._weather.origin.y = 0;
        this.addChild(this._weather);
    }

    Game_Interpreter.prototype.command236 = function() {
        $gameScreen.changeWeather(this._params[0], this._params[1], this._params[2]);
        if (this._params[3]) {
            this.wait(this._params[2]);
        }
        return true;
    }
})();