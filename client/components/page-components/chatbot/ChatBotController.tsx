import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardFooter } from "@/components/ui/card";
import { Send } from "lucide-react";

type ChatBotControllerProps = {
  inputMessage: string;
  setInputMessage: (value: string) => void;
  sendMessage: () => void;
};

const ChatBotController = ({ inputMessage, setInputMessage, sendMessage }: ChatBotControllerProps) => {
  return (
    <CardFooter className="p-6 bg-dark-300">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex w-full items-center space-x-3"
      >
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow bg-dark-100 text-white placeholder-gray-400 border-gray-600 focus:border-green-500 focus:ring-green-500 text-sm py-3 rounded-full"
          aria-label="Type your message"
        />
        <Button
          type="submit"
          size="icon"
          className="rounded-full h-12 w-12 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </CardFooter>
  );
};

export default ChatBotController;
