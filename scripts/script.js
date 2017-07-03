window.onload = function() {
           
            var jsonResult = data;
            var keys = Object.keys(data).map(function(key){return key});
            keys.map(function(key){
                
                switch(key)
                {
                    case 'name' : document.getElementById('usrName').textContent = jsonResult[key];
                                  break;
                    case 'title' : document.getElementById('usrTitle').textContent = jsonResult[key];
                                   break;
                    case 'contact' : Object.keys(jsonResult['contact']).map(function(key){
                                                    if(key=='phone')
                                                       document.getElementById('usrPhone').textContent = jsonResult['contact'][key];
                                                    else 
                                                    if(key=='email')
                                                      document.getElementById('usrEmail').textContent = jsonResult['contact'][key];
                                                });
                                     break;
                    case 'bodyContent' : createBodyContent(jsonResult[key]);
                                         break;
                }

            });

            function createBodyContent(obj)
            {
                Object.keys(obj).map(function(key,index){
                     var newRow = document.createElement('div');
                        newRow.className = 'row';
                        
                    Object.keys(obj[key]).map(function(innerKey){
                        switch(innerKey)
                        {
                            case 'label' : createLeftPanel(obj[key][innerKey],newRow);
                                            break;
                            case 'subContentType' : if(obj[key][innerKey] == 'paragraph')
                                                    createPara(obj[key]['subContent'],newRow);
                                                    else if(obj[key][innerKey] == 'headingBlock')
                                                        createHeadingBlock(obj[key]['subContent'],newRow);
                                                    else createListBlock(obj[key]['subContent'],newRow);
                                                    break;
                        }
                    });

                    document.body.appendChild(newRow);

                    var hr = document.createElement('hr');
                    document.body.appendChild(hr);
                });
            }

            function createLeftPanel(label,element)
            {
                var newDiv = document.createElement('div');
                newDiv.className = 'col-sm-4';
                newDiv.style.fontSize = '20px';
                var newPara = document.createElement('para');
                var text = document.createTextNode(label);
                newPara.appendChild(text);
                newDiv.appendChild(newPara);
                element.appendChild(newDiv);
            }

            function createPara(content,element)
            {
                var newDiv = document.createElement('div');
                newDiv.className = 'col-sm-8 content-size';
                //newDiv.style.fontSize = '20px';
                var newPara = document.createElement('para');
                var text = document.createTextNode(content);
                newPara.appendChild(text);
                newDiv.appendChild(newPara);
                element.appendChild(newDiv);
            }

            function createHeadingBlock (content,element)
            {
                var newDiv1 = document.createElement('div');
                newDiv1.className = 'col-sm-8';
                //newDiv1.style.fontSize = '20px';
                var newRow = document.createElement('div');
                newRow.className = 'row';    
                content.map(function(subObj){
                    var newDiv2 = document.createElement('div');
                    newDiv2.className = 'col-sm-8';
                    var newParaHead = document.createElement('p');
                    newParaHead.className = 'heading-size';
                    var newParaHeadText = document.createTextNode(subObj['title']);
                    newParaHead.appendChild(newParaHeadText);
                    var newParaContent =  document.createElement('p');
                    newParaContent.className = 'content-size';
                    var newParaContentText = document.createTextNode(subObj['content']);
                    newParaContent.appendChild(newParaContentText);
                    newDiv2.appendChild(newParaHead);
                    newDiv2.appendChild(newParaContent);
                    newRow.appendChild(newDiv2);
                });
                newDiv1.appendChild(newRow);
                element.appendChild(newDiv1);
            }

            function createListBlock (content,element)
            {
                var newDiv = document.createElement('div');
                newDiv.className = 'col-sm-8 content-size';
               // newDiv.style.fontSize = '20px';
                var unorderedList = document.createElement('ul');
                content.map(function(skill){
                    var listItem = document.createElement('li');
                    var listItemText = document.createTextNode(skill);
                    listItem.appendChild(listItemText);
                    unorderedList.appendChild(listItem);
                });
                newDiv.appendChild(unorderedList);
                element.appendChild(newDiv);
            }

}