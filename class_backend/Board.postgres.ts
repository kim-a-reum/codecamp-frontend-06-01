import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
//^ board 클래스를 테이블로 변경해달라는 말이구나 !를 적어줌 
// 함수에다가 인자로 밑에 애들을 적었다고 생각하면 됨 


export class Board extends BaseEntity{

    @PrimaryGeneratedColumn("increment")
    number!: number;

    @Column({type:"text"})
    writer! :String;

    @Column({type:"text"})
    title!: String;

    @Column({type:"text"})
    contents!: String;

    // deletedAt: Date
    // soft delete 방식ㅇ다 

}