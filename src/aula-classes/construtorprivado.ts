export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string
  ){}

  connect(): void {
    console.log(`Conected: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase( host: string, user: string, password: string ): Database{
    if (Database.database) {
      console.log('Retornando instancia ja criada');
      return Database.database;
    }
    console.log('Criando nova instância.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '12345678');
db1.connect();
