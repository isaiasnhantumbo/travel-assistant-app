export interface RequestSyncDTO {
  lastPulledAt: Date
  timestamp: number
  userId?: string
  hasFirstPull?: boolean
}
export interface ResponseSyncDTO {
  changes: IResponseSyncDataRaw
  timestamp: number
}

export interface IResponseSyncDataRaw {
  [model: string]: {
    created?: any[]
    updated?: any[]
    deleted?: string[]
  }
}
export interface IDataSyncRaw<T> {
  created: T[]
  updated: T[]
  deleted: string[]
  lastPulledAt: Date
}

// interface ITodoRaw extends Todos {
//   _changed: string;
// }

interface IDataRaw {
  [model: string]: {
    created?: any[]
    updated?: any[]
    deleted?: string[]
  }
}

// interface IPushSyncDTO {
//   changes: IDataRaw[]
// }
export interface IPushSyncDTO {
  accounts: Accounts
  banks: Banks
  categories: Categories
  transaction_types: Transaction_types
  transactions: Transactions
  transactions_accounts: Transactions_accounts
  users: Users
  budgets: Budgets
  goals: Goals
  deposits: Deposits
}
interface Accounts {
  created: any[]
  deleted: any[]
  updated: any[]
}
interface Budgets {
  created: any[]
  deleted: any[]
  updated: any[]
}
interface Deposits {
  created: any[]
  deleted: any[]
  updated: any[]
}
interface Goals {
  created: any[]
  deleted: any[]
  updated: any[]
}
interface Banks {
  created: any[]
  deleted: any[]
  updated: any[]
}
interface Categories {
  created: any[]
  deleted: any[]
  updated: any[]
}
interface Transaction_types {
  created: any[]
  deleted: any[]
  updated: any[]
}
interface Transactions {
  created: any[]
  deleted: any[]
  updated: any[]
}
export interface Transactions_accounts {
  created: any[]
  deleted: any[]
  updated: any[]
}
interface Users {
  created: any[]
  deleted: any[]
  updated: any[]
}
