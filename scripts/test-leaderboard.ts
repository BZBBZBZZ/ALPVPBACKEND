import { UserService } from "../src/services/user-service";

(async () => {
  try {
    const rows = await UserService.getLeaderboard(10);
    console.log(rows);
  } catch (e) {
    console.error(e);
  } finally {
    process.exit(0);
  }
})();