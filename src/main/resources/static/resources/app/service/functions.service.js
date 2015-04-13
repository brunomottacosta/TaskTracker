'use strict';


app.factory('Functions', function($timeout) {
	
	var f = {
		
		// funcao de ordenacao:
		// recebe a coluna selecionada
		// as colunas da tabela que podem ser selecionadas
		// e a variavel de ordenacao	
		ordenacaoTabela: function(column, columns, sort) {
			if (sort.column === column) {
	    		sort.descending = !sort.descending;
	    	} else {
	    		sort.column = column;
	    		sort.descending = false;
	    	} 
	    	
	    	angular.forEach(columns, function(obj){
	    		if (obj.type === column) {
	    			obj.classe = "ordered-by-this";
	    			if (sort.descending) {
	    				obj.arrow = "fa fa-caret-down";
	    			} else {
	    				obj.arrow = "fa fa-caret-up";
	    			}
	    		} else {
	    			obj.classe = "";
	    			obj.arrow = "";
	    		}
	    	});
		}				
	}
	
	return f;
});