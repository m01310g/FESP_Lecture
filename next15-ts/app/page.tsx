import { DfMenuService } from "@/services/DfMenuService";

const Page = async () => {
    const service = new DfMenuService();
    const menus = await service.getList();

    return (
        <div>
            <pre>{JSON.stringify(menus, null, 2)}</pre>
        </div>
    );
};

export default Page;
