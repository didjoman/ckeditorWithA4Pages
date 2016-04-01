
$( document ).ready(function() {
    CKEDITOR.on('instanceReady', function( e ) {
	CKEDITOR.instances.editor.insertHtml('<div class="page"></div>');

	e.editor.on('key', function(e) {
            var selection = e.editor.getSelection();
            var ranges = selection.getRanges();
            if (ranges != null) {
                var range = ranges[0];
                if (range != null) {
                    range = range.clone();

                    var currentNode = range.startContainer;
                    var endNode = range.endContainer;

                    var cancelEvent = false;

                    console.log("Key = " + e.data.keyCode);
                    switch (e.data.keyCode) {
                    case 8: { // [ <--| ]
                        if (range.startOffset == 0) {
                            var ancestor = currentNode.$.parentNode;
							    if (ancestor.tagName === 'BODY' && currentNode.$.previousSibling === null) {
								console.log("Nothing to remove");
								cancelEvent = true;
								break;
						    }
                        }
                        break;
                    }
                    default: {
                        return true;
                    }
                    }
                    
                    
                    if (cancelEvent) {
                        //Cancel the event
                        e.cancelBubble = true;
                        e.returnValue = false;
                        e.cancel();
                        e.stop();
                        return false;
                    }
                }
            }
            return true;
        } );

    });
});

