interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div
      className={`h-full flex items-center justify-center mx-auto w-full py-6 md:py-8 px-4 md:px-6 ${className} min-h-screen`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
