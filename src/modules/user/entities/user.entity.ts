import { Column, Entity } from "typeorm";
import { CommonEntity } from "../../../common/common.entity";
import { UserInterface } from "../interfaces/user.interface";

@Entity()
export class User extends CommonEntity implements UserInterface {
    @Column({ type: 'citext', nullable: false })
    firstName: string;
    @Column({ type: 'citext', nullable: false })
    lastName: string;
    @Column({ type: 'citext', nullable: false })
    password: string;
    @Column({ type: 'citext', nullable: true, default: null })
    salt: string;
    @Column({ type: 'citext' })
    email: string;
    @Column({ default: true})
    active: boolean;
    @Column({ type: 'citext', nullable: false })
    license: string;
}
