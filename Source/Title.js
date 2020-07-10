class Title
{
	constructor
	(
		name, engine, story, visual, audio
	)
	{
		this.name = name;
		this.engine = engine || new Engine();
		this.story = story || new Story();
		this.visual = visual || new Visual();
		this.audio = audio || new Audio();
	}

	toDomElementThead()
	{
		var thead = document.createElement("thead");

		var fields = 
		[
			["Name", this.name]
		];

		fields = fields.concat(this.engine.toFields());
		fields = fields.concat(this.story.toFields());
		fields = fields.concat(this.visual.toFields());
		fields = fields.concat(this.audio.toFields());

		var fieldNames = fields.map(x => x[0].replace(" ", "&nbsp;"));

		for (var i = 0; i < fieldNames.length; i++)
		{
			var fieldName = fieldNames[i];
			var th = document.createElement("th");
			th.innerHTML = fieldName;
			thead.appendChild(th);
		}

		return thead;
	}

	toDomElementTr()
	{
		var tr = document.createElement("tr");

		var fields = 
		[
			["Name", this.name]
		];

		fields = fields.concat(this.engine.toFields());
		fields = fields.concat(this.story.toFields());
		fields = fields.concat(this.visual.toFields());
		fields = fields.concat(this.audio.toFields());

		var fieldValues = fields.map(x => x[1]);

		for (var i = 0; i < fieldValues.length; i++)
		{
			var fieldValue = fieldValues[i];

			var td = document.createElement("td");
			td.innerHTML = fieldValue;
			tr.appendChild(td);
		}

		return tr;
	}
}

class Audio
{
	constructor(effects, songs)
	{
		this.effects = effects || [];
		this.songs = songs || [];
	}

	toFields()
	{
		var returnValues = 
		[
			[ "Effects", "0/" + this.effects.length ],
			[ "Songs", "0/" + this.songs.length ]
		];
		return returnValues;
	}
}

class Engine
{
	constructor(hasSourceRepository, isCodeComplete)
	{
		this.hasSourceRepository = hasSourceRepository;
		this.isCodeComplete = isCodeComplete;
	}

	toFields()
	{
		var returnValues =
		[
			[ "Source Repo", (this.hasSourceRepository ? "*" : " ") ] ,
			[ "Code Complete", (this.codeComplete ? "*" : " ") ] 
		];
		return returnValues;
	}
}

class Environment
{
	constructor(name, isSketched, isDesigned, isRendered)
	{
		this.name = name || "untitled";
		this.isSketched = isSketched || false;
		this.isDesigned = isDesigned || false;
		this.isRendered = isRendered || false;
	}
}

class Model
{
	constructor(name, isSketched, isModelled, isRigged, isAnimated, isRendered)
	{
		this.name = name || "untitled";
		this.isSketched = isSketched || false;
		this.isModelled = isModelled || false;
		this.isRigged = isRigged || false;
		this.isAnimated = isAnimated || false;
		this.isRendered = isRendered || false;
	}
}

class Scene
{
	constructor(name, isOutlined, isScriptWritten, isAudioRecorded, isVideoDesigned, isVideoRendered)
	{
		this.name = name || "untitled";
		this.isOutlined = isOutlined || false;
		this.isScripted = isScripted || false;
		this.isAudioRecorded = isAudioRecorded || false;
		this.isVideoDesigned = isVideoDesigned || false;
		this.isVideoRendered = isVideoRendered || false;
	}
}

class Song
{
	constructor(name, isSketched, isComposed, isRecorded)
	{
		this.name = name || "untitled";
		this.isSketched = isSketched || false;
		this.isComposed = isComposed || false;
		this.isRecorded = isRecorded || false;
	}
}

class SoundEffect
{
	constructor(name, isRecorded, isEdited)
	{
		this.name = name || "untitled";
		this.isRecorded = isRecorded || false;
		this.isEdited = isEdited || false;
	}
}

class Story
{
	constructor(hasFlavorContent, hasPlotOutline, scenes)
	{
		this.hasFlavorContent = hasFlavorContent || false;
		this.hasPlotOutline = hasPlotOutline || false;
		this.scenes = scenes || [];
	}

	toFields()
	{
		var returnValues =
		[
			[ "Flavor Content", (this.hasFlavorContent ? "*" : " ") ],
			[ "Plot Outline", (this.hasPlotOutline ? "*" : " ") ],
			[ "Scenes", "0/" + this.scenes.length ] 
		];
		return returnValues;
	}
}

class Visual
{
	constructor(hasTitleScreen, hasFont, environments, models)
	{
		this.hasTitleScreen = hasTitleScreen || false;
		this.hasFont = hasFont || false;
		this.environments = environments || [];
		this.models = models || [];
	}

	toFields()
	{
		var returnValues = 
		[
			[ "Title Screen", (this.hasTitleScreen ? "*" : " ") ],
			[ "Font", (this.hasFont ? "*" : " ") ],
			[ "Environments", "0/" + this.environments.length ],
			[ "Models", "0/" + this.models.length ]
		];
		return returnValues;
	}

}
