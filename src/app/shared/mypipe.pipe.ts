import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name:'myPipe',
})

export class CutomPipe implements PipeTransform {

	transform(item, value?){
		if(item){
			
			
			
			return JSON.stringify(item);
			
			
			
		} else{
			return null;		
		}
	
	}
	
}