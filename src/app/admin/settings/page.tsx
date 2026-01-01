import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminSettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Manage general site settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="site-name">Site Name</Label>
              <Input id="site-name" defaultValue="TrustNet Hub" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">Public Contact Email</Label>
              <Input id="contact-email" type="email" defaultValue="contact@trustnethub.com" />
            </div>
            <Button type="submit" className="w-fit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Social Media</CardTitle>
          <CardDescription>Connect your social media profiles.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="linkedin">LinkedIn URL</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/company/trustnethub" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="twitter">Twitter / X URL</Label>
              <Input id="twitter" placeholder="https://x.com/trustnethub" />
            </div>
            <Button type="submit" className="w-fit">Save Social Links</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
