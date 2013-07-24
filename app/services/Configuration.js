smiley360 = smiley360 || {};
smiley360.configuration = smiley360.configuration || {};


smiley360.configuration.getServerUrl = function () { return "http://173.18.18.52/index.php/"; }
smiley360.configuration.getResourceDomain=function()
{
	return "http://uat.smiley360.com";
}
smiley360.configuration.getOfferImagesUrl=function(missionID, imageName)
{
	return Ext.String.format(smiley360.configuration.getResourceDomain()+"/images/missions/mission{0}/{1}", missionID, imageName);
}