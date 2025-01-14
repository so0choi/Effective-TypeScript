/**
 * 아래의 userRole이 가진 리터럴 타입을 제거하여 UserInformation을 유연하게 만드려면 어떻게 할까요?
 */

// best: generic
// or: generic 받아서 userRole 타입으로?
type UserInformation<T> = {
  userId: string;
  userName: string;
  userRole: UserRole | T;
  password: string;
};

type UserRole = "normal" | "vip" | "admin";
