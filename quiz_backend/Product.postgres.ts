import { Entity,Column,PrimaryGeneratedColumn, BaseEntity} from 'typeorm'


 @Entity() 
	export class Product extends BaseEntity{
				
			@PrimaryGeneratedColumn("uuid") 
			_id!: string;
			
			@Column({type:"text"})
			seller!: string;
			
			@Column({type:"text"})
			name!: string;
			
			@Column({type:"text"})
			detail!: string;

			@Column({type:"text"})
			price!: number;
			

		}
			
