
CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'links', groups: [ 'links' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'blocks', 'align', 'list', 'indent', 'bidi', 'paragraph' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];
	
	config.removePlugins = 'magicline';

	config.removeButtons = 'Source,NewPage,Templates,ShowBlocks,About,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,Iframe,PageBreak,Unlink,Anchor,Language,BidiRtl,BidiLtr,CreateDiv,Blockquote,RemoveFormat,Form,Checkbox,Radio,TextField,Select,Textarea,Button,ImageButton,HiddenField,SelectAll';
	config.allowedContent = true;
	config.contentsCss = '/home/alexandre/documents/web/ckeditor/plunk/style.css';
	config.width = '90%';
	config.height = '30em'; 

};